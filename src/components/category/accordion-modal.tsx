export default function AccordionModal() {
  return (
    <>
      <div className="accordion " id="accordionPanelsStayOpenExample">
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
              <strong>This is the first item's accordion body.</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item border-0 border-bottom rounded-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button shadow-none collapsed rounded-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Marca
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item border-0 border-bottom rounded-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button shadow-none collapsed rounded-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Categoria
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
