import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../Components/sidebar/Sidebar';
import s from './CompaniesTable.module.css'
import instance from '../../../services/instance'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Repeater from '../../../mobx/Repeater';
// import FuzzySearch from 'fuzzy-search';
// import FuzzySearch from 'react-fuzzy'

export const CompaniesTable = observer(() => {
  const [data, setData] = useState('')
  const [selectedOption, setSelectedOption] = useState({ value: 'allcompanies', label: 'All companies' })
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {

    getCategories()
  }, [Repeater.bool]);

  const getCategories = () => {
    instance.get('/companies/all').then((response) => {
      setData(response.data)
    }).catch(error => {
      console.log(error)
    });
  }


//   const filteredDataSearch = data && data.filter(item => {
//     return item.name.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   const searchByName = (query) => {
//     const searcher = new FuzzySearch(data, ['name']);
//     const results = searcher.search(query);
//     setSearchResults(results);
// };


  const handleSearchInputChange = (event) => {
    // setSearchTerm(event.target.value);
    // searchByName(event)
  }

  const filteredData = data && data.filter(item => {
    if (selectedOption === 'active') {
      return item.active === true;
    } else if (selectedOption === 'inactive') {
      return item.active === false;
    } else {
      return true;
    }
  });

  const sortedData = filteredData && filteredData.sort((a, b) => a.name.localeCompare(b.name));

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }
  const navigate = useNavigate()
  const goToAnotherPage = (item) => {
    navigate('/companies/details', { state: { item } })
  }
  return (
    <div className="cagewall">
      <motion.div className='sidebar'>
        <Sidebar />
      </motion.div>
      <motion.div className='area'
        initial={{ y: 250 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ y: -750 }}>
        <h2>All Companies</h2>

        <div className={s.sortInputRow}>

          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="all">All Companies</option>
            <option value="active">Active Companies</option>
            <option value="inactive">Inactive Companies</option>
          </select>
          {/* <input placeholder='Type...' value={searchTerm} onChange={handleSearchInputChange} ></input> */}
        </div>



        <div className={s.table}>
          <table className={s.tablecompany}>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Address</th>
                <th>Phone Num</th>
                <th>Rating</th>
                <th>Active</th>
                <th >Information</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(sortedData).map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.phoneNumber}</td>
                    <td>0</td>
                    <td>{item.active ? 'Active' : 'Inactive'}</td>
                    <td className='center'>
                      <button className='btn primary_btn' onClick={() => goToAnotherPage(item)}>
                        Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>


    </div>
  )
})

// onClick={()=>DeleteCompany(item.id)}
