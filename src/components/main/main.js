import React from 'react';
import Cards from './cards';
import {data} from '../../data' ;
import Table from  './table';
function main() {
  return (
    <div>
     <Table data={data}/>
     {data?.map(ele => <Cards ele={ele}/>) }
    </div>
  )
}

export default main