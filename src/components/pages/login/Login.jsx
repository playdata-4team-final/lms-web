
import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePwChange = (e) => {
        setPw(e.target.value);
    };

    const handleConfirm = () => {
        // 여기서 api 쏠거임
    };

    return (
        <div style={{ border: '1px solid black', padding: '10px', width: '200px' }}>
            <div>
                <input
                    type="text"
                    value={id}
                    onChange={handleIdChange}
                    placeholder="아이디"
                    style={{ border: '1px solid black', margin: '5px' }}
                />
            </div>
            <div>
                <input
                    type="password"
                    value={pw}
                    onChange={handlePwChange}
                    placeholder="비밀번호"
                    style={{ border: '1px solid black', margin: '5px' }}
                />
            </div>
            <div>
                <Link to = "/main" onClick={handleConfirm} style={{ border: '1px solid black', margin: '5px' }}>
                    확인
                </Link>
            </div>
        </div>
    );
};

export default Login;
