import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext()
const FriendsProvider = ({ children }) => {
    const [calling, setcalling] = useState([])
    const [text, setText] = useState([])
    const [video, setvideo] = useState([])
    const handelCall = (currentFriend) => {

        const isExistfriend = calling.find((item) => item.id === currentFriend.id)
        if (isExistfriend) {
            toast.error('The friend is already calling')

        } else {
            setcalling([...calling, currentFriend])
            toast.success(`Call ${currentFriend.name} `)
        }
        console.log(currentFriend, calling);


    }
    const handelText = (currentFriend) => {
        const isExistfriend = text.find((item) => item.id === currentFriend.id)
        if (isExistfriend) {
            toast.error('The friend is already exist')

        } else {
            setText([...text, currentFriend])
            toast.success(`Text ${currentFriend.name}`)
        }
        console.log(currentFriend, calling);


    }
    const handelVideo = (currentFriend) => {


        const isExistfriend = video.find((item) => item.id === currentFriend.id)
        if (isExistfriend) {
            toast.error('the friend is already exist')

        } else {
            setvideo([...video, currentFriend])
            toast.success(`Video Call ${currentFriend.name}`)
        }
        console.log(currentFriend, video);


    }
    const data = {
        calling, setcalling, handelCall, text, setText, handelText, handelVideo, video, setvideo
    }
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendsProvider;