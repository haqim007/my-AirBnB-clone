import React, { useState } from "react";
import './Banner.css'
import {Button} from '@material-ui/core'
import SearchDates from "./SearchDates";

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
      <div className="banner">
        <div className="banner_search">
          <Button className="banner_search_btn" variant="outlined" onClick={()=>setShowSearch(!showSearch)}>
            {showSearch ? <>Show Date Picker </>: <>Search Dates</>}
          </Button>
          {showSearch && <SearchDates/> }
        </div>
        <div className="banner_info">
          <h2>Get out and stretch yout imagination </h2>
          <h5>
            Plan of difference kind of gateway to uncover the hidden gems near
            you
          </h5>
          <Button variant="outlined">Explore Nearby</Button>
        </div>
      </div>
    );
}

export default Banner
