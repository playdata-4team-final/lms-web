import React, {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";


import {Outlet} from "react-router";
import {idAtom, roleAtom, tokenAtom} from "../atom/LoginAtom";
import {exceptionApi} from "../api/Api";

const GetRoleRoute = () => {

    const [id,setId] = useRecoilState(idAtom);
    const [role, setRole] = useRecoilState(roleAtom);

    useEffect(() => {
        get();
    }, []);

    const get = async () => {
        const response = await exceptionApi('/api/v1/auth/info', 'POST');
        setId(response.data.id)
        setRole(response.data.role)
        console.log(response.data.id)
        console.log(response.data.role)
        return response;
    }
    return <div>
        <Outlet/>
    </div>
};

export default GetRoleRoute;