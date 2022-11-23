import React from 'react'

export default function Biography() {
    return (
        <>
            <table className='table-auto mx-auto mt-8 border border-spacing-3 border-slate-500 bg-slate-200 border-separate'>

                <tbody>
                    <tr>
                        <td><b>Full Name</b></td>
                        <td>Krati Saini</td>
                    </tr>
                    <tr>
                        <td><b>Date of Birth</b></td>
                        <td>18 may 1998</td>
                    </tr>
                    <tr>
                        <td><b>Birth Place</b></td>
                        <td>Bhopal Madhya Pradesh, india</td>
                    </tr>
                    <tr>
                        <td><b>Nationality</b></td>
                        <td>indian</td>
                    </tr>
                    <tr>
                        <td><b>Profession</b></td>
                        <td>Singer, Instagam Reels</td>
                    </tr>
                    <tr>
                        <td><b>Famous for</b></td>
                        <td>Instagam Reels, Singer & her Beautiful looks</td>
                    </tr>
                    <tr>
                        <td><b>Religion</b></td>
                        <td>Hindu</td>
                    </tr>
                    <tr>
                        <td><b>Food Habit </b></td>
                        <td>Non-Vegetarian</td>
                    </tr>
                    <tr>
                        <td><b>College / University</b></td>
                        <td>Lakshmi Narain College of Technology(LNCT), Bhopal (M.P)</td>
                    </tr>
                    <tr>
                        <td><b>Qualification</b></td>
                        <td>Graducation</td>
                    </tr>
                    <tr>
                        <td><b>Hobbies</b></td>
                        <td>singing, modeling</td>
                    </tr>
                    <tr>
                        <td><b>Marital Status</b></td>
                        <td>Single</td>
                    </tr>
                </tbody>
                <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div class="shrink-0">
                        <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"></img>
                    </div>
                    <div>
                        <div class="text-xl font-medium text-black">ChitChat</div>
                        <p class="text-slate-500">You have a new message!</p>
                    </div>
                </div>
            </table>
        </>
    )
}
