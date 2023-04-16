import Head from 'next/head'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import { Header } from "../components/Header/Header";
import {useAppSelector,useAppdispatch} from "../hooks/redux"

import { Home as MainPage } from '../components/Home/Home'
export default function  Home (){


  return (
<div>
<MainPage/>
</div>
  )
}

