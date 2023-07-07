import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
// import {API_URL} from '@env'
import axios from 'axios'
import RickandmortyList from '../components/RickandmortyList'

export default function RickandmortyApi() {
    
    const API_URL = `https://rickandmortyapi.com/api/character/`
    const [characters, setCharacters] = useState([])
    const [nextUrl, setNextUrl] = useState()
    

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await axios.get(API_URL);
                setCharacters(response.data.results);
                setNextUrl(response.data.info.next)
            }catch(error){
                console.log(error)
            }
        }
          
          fetchData();
    }, []);

    const loadMoreData = async()=>{
      try{
          if(nextUrl){
            const response = await axios.get(nextUrl)
            const newCharacters = response.data.results
            setCharacters((prevCharacters)=>[...prevCharacters, ...newCharacters])
            setNextUrl(response.data.info.next)
          }
          
      }catch(error){
        console.log(error)
      }
    }
  return (
    <View>
      <RickandmortyList characters={characters} loadMoreData={loadMoreData} nextUrl={nextUrl}/>
    </View>
  )
}