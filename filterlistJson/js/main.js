const search = document.querySelector('#search')
const matchList = document.querySelector('.match-list');

// Search states.json and filter it

const searchStates = async searchText =>{
  const res = await fetch('../state_capitals.json');
  const states = await res.json();

  //Get matched current text

  let matches = states.filter(state =>{
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if(searchText == 0){
    matches = [];
    matchList.innerHTML='';
  }

  outputHTML(matches);
};

const outputHTML = matches =>{
  if(matches.length > 0){
    const html = matches.map(match => `
      <div class="card card-body mb-1">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">
        </span></h4>
        <small>Lat: ${match.lat}/ Long: ${match.long}</small>
      </div>
    `).join('');
    matchList.innerHTML = html;
  }
}

search.addEventListener('input', ()=> searchStates(search.value));