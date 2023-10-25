import {useContext,useState} from 'react'
import { Boss } from './Puplic'
import {Oop} from './asmall'
export default function MiniMapping({id,name}) {
    const {joky} = useContext(Boss)


return (
  joky.map(x => <Oop key={x.id} {...x}/>)
)
    }


    