import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import '../css/additional-styles/dropdown-filter.css';

function DropdownFilter({
  align
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [taxFilters, setTaxFilters] = useState([]);
  const [pageFilters, setPageFilters] = useState(5);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handlerChange = (e) => {
    e.preventDefault();
    setTaxFilters([]);

    for (let i = 0; i < 5; i++) {
      if (e.target[i].checked) {
        console.log(e.target[i].value)
        // setTaxFilters(taxFilters.push(e.target[i].value))
        setTaxFilters(...taxFilters, e.target[i].value)
      };
    };
    for (let i = 5; i < 7; i++) {
      if (e.target[i].checked) {
        // console.log(e.target[i].value)
        setPageFilters(e.target[i].value);
      };
    };
    console.log(taxFilters);
  };

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        Filters
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className={`origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <form onSubmit={handlerChange}>
          <div id='dropdown__menu' ref={dropdown}>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">Filters</div>
              <ul className="mb-4">
                <li className="py-1 px-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" name='es_general_21' value='es_general_21' />
                    <span className="text-sm font-medium ml-2">Es_general_21</span>
                  </label>
                </li>
                <li className="py-1 px-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" name='es_reduced_10' value='es_reduced_10' />
                    <span className="text-sm font-medium ml-2">Es_reduced_10</span>
                  </label>
                </li>
                <li className="py-1 px-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" name='es_super-reduced_4' value='es_super-reduced_4' />
                    <span className="text-sm font-medium ml-2">Es_super-reduced_4</span>
                  </label>
                </li>
                <li className="py-1 px-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" name='fr_general_20' value='fr_general_20' />
                    <span className="text-sm font-medium ml-2">Fr_general_20</span>
                  </label>
                </li>
                <li className="py-1 px-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" name='fr_reduced_5.5' value='fr_reduced_5.5' />
                    <span className="text-sm font-medium ml-2">Fr_reduced_5.5</span>
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">Results per page</div>
              <ul className="mb-4">
                <li className="py-1 px-3">
                  <label className="flex items-center">
                    <input defaultChecked type="radio" className="form-checkbox" name='items' value={5} />
                    <span className="text-sm font-medium ml-2">5_Items</span>
                  </label>
                </li>
                <li className="py-1 px-3">
                  <label className="flex items-center">
                    <input type="radio" className="form-checkbox" name='items' value={10} />
                    <span className="text-sm font-medium ml-2">10_Items</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-2 px-3 border-t border-slate-200 bg-slate-50">
            <ul className="flex items-center justify-between">
              <li>
                <button className="btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600">Clear</button>
              </li>
              <li>
                <button className="btn-xs bg-blue-500 hover:bg-blue-600 text-white" type='submit' onClick={() => setDropdownOpen(false)} onBlur={() => setDropdownOpen(false)}>Apply</button>
              </li>
            </ul>
          </div>
        </form>

      </Transition>
    </div>
  );
}

export default DropdownFilter;
