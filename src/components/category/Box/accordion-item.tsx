


export default function AccordionItem(){
    return(
        <div className="accordion-item border-0 border-bottom  rounded-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button shadow-none  collapsed rounded-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Negocio
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              
            </div>
          </div>
        </div>
    )
}