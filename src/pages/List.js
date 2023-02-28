import React, {useState} from 'react';

export default function List(){
    const Listinfo = {
        telent : [
            {
                id:1,
                name : '유재석',
                email : 'ryu@gmail.com'
            },
            {
                id:2,
                name : '김종국',
                email : 'kim@gmail.com'
            },
            {
                id:3,
                name : '하하',
                email : 'ha@gmail.com'
            },
            {
                id:4,
                name : '송지효',
                email : 'song@gmail.com'
            }
        ]
    }
    return(
        <div className='row'>
            <h2>List</h2>

            <div className='List_wrap'>
                <div className='List'>
                    <table>
                        <th>
                            이름
                        </th>
                        <th>
                            이메일
                        </th>
                        <tr>
                            <td>
                                {Listinfo.telent[0].name}
                            </td>
                            <td>
                            {Listinfo.telent[0].email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {Listinfo.telent[1].name}
                            </td>
                            <td>
                            {Listinfo.telent[1].email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {Listinfo.telent[2].name}
                            </td>
                            <td>
                            {Listinfo.telent[2].email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {Listinfo.telent[3].name}
                            </td>
                            <td>
                            {Listinfo.telent[3].email}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}