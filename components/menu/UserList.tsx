import Link from "next/link"

import userList from "@/setting/userList";
import {VscAccount} from "react-icons/vsc";


export default function UserList() {
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost gap-2 normal-case">
                <VscAccount className={'w-8 h-8'}/>
                <div className={'hidden md:block text-2xl'} id={'userName'}/>
            </label>
            <ul className="dropdown-content bg-base-200 text-base-content rounded-box top-px shadow-2xl menu menu-compact p-4 mt-14">
                {userList.map((userName, index) => {
                    return (
                        <li key={index} className={'hover-bordered w-64'}>
                            <Link href={`/${userName}`}><a>👤 {userName}</a></Link>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}