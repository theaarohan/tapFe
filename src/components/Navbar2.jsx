import React, { useState } from 'react'
import {Grid, Button, Text, Image, Drawer, Card, Tabs, } from "@geist-ui/core";
import { Menu, LogIn, User, UserX } from '@geist-ui/icons'
import {Link, useNavigate} from "react-router-dom";
import LogoutButton from '../apiInteraction/LogoutButton';

export default function Navbar2() {
  const [stOpenDrawer, setStOpenDrawer] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    
    {/* <Grid.Container gap={16}  className='bg-green-400'> */}
    <Grid xs={24}><Card width="100%" height="">
      
      <div className="flex flex-row justify-between align-middle space-x-2 bg-white-400" >
        <div className="my-auto">
          <Link href="">
            <img className="h-8 object-contain" src='/assets/logos/TapLogo.png' />
          </Link>
        </div>
        <div>
        <div className=" flex flex-row align-middle justify-center">
          <div className='flex flex-row align-middle justify-center'>
              {/* <Tabs initialValue="" hideDivider hideBorder leftSpace={0}>
                <Tabs.Item label="EXPLORE" value="explore">
                </Tabs.Item>
                <Tabs.Item label="TEAM" value="Team">
                </Tabs.Item>
              </Tabs> */}
              <div className="m-2 p-2"> <Link to={"/explore"}>Explore</Link> </div>
              <div className="m-2 p-2"> <Link to={"/team"}>Team</Link> </div>
              <div className="m-2 p-2"> <Link to={"/admin/new"}>New</Link> </div>
          </div>
          <div className='m-2 p-2 cursor-pointer' auto onClick={() => setStOpenDrawer(true)} scale={1/2}>
            {/* Menu Icon */}
            <Menu/>
          </div>
        
        </div>

      </div>

        {/* Drawer Start */}
          <Drawer visible={stOpenDrawer} onClose={() => setStOpenDrawer(false)} placement="right">
            <Drawer.Title></Drawer.Title>
            <div className='flex flex-col justify-between h-full'>
           
            <Drawer.Subtitle>
              {/* Top contents  */}
              <div className="">
                  <Link to="/auth/login" className='m-1' onClick={()=>setStOpenDrawer(false)}> 
                      <Button icon={<LogIn/>} auto>Login</Button>
                  </Link>
                  <Link to="/auth/register" className='m-1' onClick={()=>setStOpenDrawer(false)}> 
                      <Button icon={<User/>} auto>Register</Button>
                  </Link>
              </div>
            </Drawer.Subtitle>

            <Drawer.Content>              
              {/* Bottom contents  */}
                <LogoutButton newFn={() => setStOpenDrawer(false)}/>
            </Drawer.Content>
              </div>
          </Drawer>
        {/* Drawer End */} 
      </div>
    
    </Card>
    </Grid>
    {/* </Grid.Container> */}
    
    </>
  )
}