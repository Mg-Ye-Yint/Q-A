import { create } from 'zustand'

const useRole = create((set)=>({
    chooseHost: false,
    setChooseHost: (host)=> set(()=>({chooseHost: host}))
}))

export {useRole};