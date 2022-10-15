/**
 *  @param name HTML, JAVASCRIPT, CSS
 *  @param color purple, blue, green
 * */
export const cardItemElement = (name, color) => {
  return `<div class="card-items">
          <div class="card">
            <div class="progress-svg-item">
              <svg verstion="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="transparent" />
                <circle cx="100" cy="100" r="80" fill="transparent" stroke="#80808047" stroke-width="8" stroke-dasharray="510" stroke-dashoffset="0"> </circle>
                <circle class="progress-bar" cx="100" cy="100" r="80" fill="transparent" stroke="white" stroke-width="8" stroke-linecap="round" stroke-dasharray="510" stroke-dashoffset="0"> </circle>
              </svg>
              <p>90 <span>%</span></p>
            </div>
          </div>
          <button class="${color}">${name}</button>
        </div>`
}

export const initHTMLElements = () => {
  return ` 
    <h1>Practical progress bar components</h1>
      <div class="cards-container"> 
        <div class="line"></div> 
      </div>
    </div>`
}
