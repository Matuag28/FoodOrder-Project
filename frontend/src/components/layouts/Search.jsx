import React from 'react';
import { TbHeartSearch } from "react-icons/tb";
export default function Search() {
  return (
    <form>
        <div className="input-group">
            <input type="text" placeholder="Search your favourite Restaurant" id="search_field" className="form-control" />
            <div className="input-group-append">
                <button id="search_btn" className="btn"><TbHeartSearch className="ta ta-search"/></button>
            </div>
        </div>
    </form>
  );
}
