import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const [searchParams,setSearchParams] = useSearchParams(); //--->배열을 리턴
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    return (
        <div>
           <h2>소개페이지</h2>
           <p>소개페이지 입니다.</p> 
           <p>{location.search}</p>
           <p>name값은 {name}</p>
           <p>age값은 {age}</p>
        </div>
    );
};

export default About;