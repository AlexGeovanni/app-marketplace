import { useState } from "react";
import BoxCheck from "./Box/box-check";

export default function AccordionModal() {
  const [selectedCheckbox, setSelectedCheckbox] = useState(1);

  const handleCheckboxChange = (index: number) => {
    setSelectedCheckbox(index);
  };

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
              <BoxCheck
                selectedCheckbox={selectedCheckbox}
                handleCheckboxChange={handleCheckboxChange}
                numberOfCheck={1}
                
                id="flexCheckChecked1"
                name="flexCheckBusiness"
                text="Negocio1"
              />
              <BoxCheck
                selectedCheckbox={selectedCheckbox}
                handleCheckboxChange={handleCheckboxChange}
                numberOfCheck={2}
                id="flexCheckChecked2"
                name="flexCheckBusiness"
                text="Negocio2"
              />
              <BoxCheck
                selectedCheckbox={selectedCheckbox}
                handleCheckboxChange={handleCheckboxChange}
                numberOfCheck={3}
                id="flexCheckChecked3"
                name="flexCheckBusiness"
                text="Negocio3"
              />
              <BoxCheck
                selectedCheckbox={selectedCheckbox}
                handleCheckboxChange={handleCheckboxChange}
                numberOfCheck={4}
                id="flexCheckChecked4"
                name="flexCheckBusiness"
                text="Negocio4"
              />
              <BoxCheck
                selectedCheckbox={selectedCheckbox}
                handleCheckboxChange={handleCheckboxChange}
                numberOfCheck={5}
                id="flexCheckChecked5"
                name="flexCheckBusiness"
                text="Negocio5"
              />
            </div>
          </div>
        </div>
        {/* <div className="accordion-item border-0 border-bottom rounded-0">
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
              <BoxCheck
                id="flexCheckChecked6"
                name="flexCheckBrad"
                text="marca1"
              />
              <BoxCheck
                id="flexCheckChecked7"
                name="flexCheckBrad"
                text="marca2"
              />
              <BoxCheck
                id="flexCheckChecked8"
                name="flexCheckBrad"
                text="marca3"
              />
              <BoxCheck
                id="flexCheckChecked9"
                name="flexCheckBrad"
                text="marca4"
              />
              <BoxCheck
                id="flexCheckChecked10"
                name="flexCheckBrad"
                text="marca5"
              />
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
              <BoxCheck
                id="flexCheckChecked11"
                name="flexCheckCategory"
                defaultChecked
                text="Categoria1"
              />
              <BoxCheck
                id="flexCheckChecked12"
                name="flexCheckCategory"
                text="Categoria2"
              />
              <BoxCheck
                id="flexCheckChecked13"
                name="flexCheckCategory"
                text="Categoria3"
              />
              <BoxCheck
                id="flexCheckChecked14"
                name="flexCheckCategory"
                text="Categoria4"
              />
              <BoxCheck
                id="flexCheckChecked15"
                name="flexCheckCategory"
                text="Categoria5"
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
