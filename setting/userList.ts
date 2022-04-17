const userList: userListType = {
    users: ["oss@azure.neneko.cn"],
    nickname: {
        "oss@azure.neneko.cn": '🐱 nenekoDev',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

