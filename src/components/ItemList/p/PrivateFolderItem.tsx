import Image from "next/image";
import Link from "next/link";
import {getIconForFolder} from "vscode-icons-js";

import {VscCloudDownload, VscCopy, VscLiveShare, VscOpenPreview} from "react-icons/vsc";

import convertB from "@/script/convert_bit";
import CopyButton from "@/components/CopyModal/CopyButton";


export default function PrivateFolderItem({user, route, name, size, index}: { user: string, route?: string[], name: string, size: number, index: number }) {
    return (
        <tr key={index}>

            {/*CheckBox*/}
            <th><label className={'flex items-center justify-end gap-2'}>{index + 1}
                {/*<input type="checkbox" className="checkbox"/>*/}
            </label></th>

            {/*Name*/}
            <td>
                <div className="flex items-center gap-2">
                    <Image className={'bg-oBlack dark:bg-oWhite bg-opacity-20 dark:bg-opacity-20 rounded'} src={'https://mystatic.dzaaaaaa.com/VscIcons/' + getIconForFolder(name)}
                           width={32} height={32}
                           layout={"fixed"} alt={name}/>
                    <Link href={`/p/${user}/${route ? route.join('/') + '/' : ''}${name}`}>
                        <a className={'font-bold'}>{name}</a>
                    </Link>
                </div>
            </td>

            {/*Size*/}
            <td className={'text-center'}>{convertB(size)}
                <link rel="preload" href={`/api/p/children?user=${user}&route=${route ? route.join('/') + '/' : ''}${name}`} as="fetch" crossOrigin="anonymous"/>
            </td>

            {/*Action*/}
            <td>
                <div className="inline space-x-2">
                    <button className={'btn invisible btn-square btn-sm'}>
                        <VscOpenPreview className={"w-6 h-6"}/>
                    </button>

                    <CopyButton className={'btn btn-ghost btn-square btn-sm'} name={name}
                                text={`https://${window.location.host}/p/${user}/${route ? route.join('/') + '/' : ''}${name}`}>
                        <VscLiveShare className={'w-6 h-6'}/>
                    </CopyButton>

                    <button className={'btn btn-square btn-sm invisible'}><VscCopy className={"w-6 h-6"}/></button>

                    <button className={'btn btn-square btn-sm invisible'}><VscCloudDownload className={"w-6 h-6"}/></button>
                </div>
            </td>
        </tr>
    )
}