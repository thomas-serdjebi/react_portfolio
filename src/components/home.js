import React, { useState, useEffect } from 'react';


function Home({darkTheme}) {

  console.log(darkTheme)

  return (
    <div className={`main ${darkTheme ? 'darktheme' : ''}`}>

    </div>
  );
}

export default Home;
