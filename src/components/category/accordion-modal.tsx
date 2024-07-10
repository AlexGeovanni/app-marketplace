import { handleFilterBrand, handleFilterSizes } from "../../redux/features/filterSlice";
import { useAppSelector } from "../../redux/hooks";
import AccordionBody from "./Box/accordion-body";

export interface ArraysTypes{
  [key :string]:boolean
}
export default function AccordionModal() {
  
  const {BRAND,SIZES}=useAppSelector((state)=>state.filterProduct)
  

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
              Tamaño
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse"
          >
            <AccordionBody array={SIZES} name="CheckboxSizes" handleDispatch={handleFilterSizes} />
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
            <AccordionBody array={BRAND} name="CheckboxBrad" handleDispatch={handleFilterBrand} />
          </div>
        </div>
        {/* 
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
