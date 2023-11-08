import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Home = () => {
    const [allJobs, setAllJobs] = useState([])

    const category = [...new Set(allJobs.map(item => item.jobCategory))];


    useEffect(() => {
                fetch('http://localhost:5000/api/v1/get-jobs')
                    .then(res => res.json())
                    .then(data => setAllJobs(data))
            }, [])
    return (
        <div>
            <ul className="menu menu-horizontal px-1">
                {
                    // category.map((categoryName,i)=><NavLink key={i}><li className="btn">{categoryName}</li></NavLink>)
                    category.map((categoryName,i)=><li  key={i}><NavLink>{categoryName}</NavLink></li>)
                }
            </ul>
        </div>
    );
};

export default Home;







// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


// const Home = () => {

//     const [allJobs, setAllJobs] = useState([])
//     const [singleCategory, setSingleCategory] = useState([])
//     console.log(singleCategory);

//     const category = [...new Set(allJobs.map(item => item.jobCategory))];
//     const [title, setTitle] = useState('On-site')
//     // console.log(category);
//     const categoryfiend = allJobs.filter(job => job.jobCategory == title)

//     const handleTab = (categ) => {
//         setTitle(categ)
//         setSingleCategory(categoryfiend)
//     }


//     useEffect(() => {
//         fetch('http://localhost:5000/api/v1/get-jobs')
//             .then(res => res.json())
//             .then(data => setAllJobs(data))
//     }, [])
//     return (
//         <div >
//             <Tabs>
//                 <TabList>
//                     {
//                         category.map((categoryName, i) => <Tab onClick={() => handleTab(categoryName)} key={i}>{categoryName}</Tab>)
//                     }
//                 </TabList>

//                 {
//                     category.map((categorytitle, i) => <TabPanel key={i}>{title}</TabPanel>)
//                 }

//                 {/* <TabPanel>
//                     <h2>Any content 1</h2>
//                 </TabPanel> */}
//                 {/* <TabPanel>
//                     <h2>Any content 2</h2>
//                 </TabPanel> */}
//             </Tabs>
//         </div>
//     );
// };

// export default Home;