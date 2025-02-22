import {useRouter} from 'next/router'

import ItemList from "@/components/ItemList/ItemList";
import Menu from "@/components/Menu/Menu";
import userList from "@/setting/userList";


export default function UserRoute() {
    const {user, route} = useRouter().query
    const userName = user as string

    return (
        <>
            <Menu userName={userName}/>

            <div className={'flex justify-center mb-14'}>
                <ItemList user={user as string} route={route as string[]}/>
            </div>
        </>
    )
}
