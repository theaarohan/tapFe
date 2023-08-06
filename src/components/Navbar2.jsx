import React, { useState } from 'react'
import {Grid, Button, Text, Image, Drawer, Card, Tabs } from "@geist-ui/core";
import { Menu } from '@geist-ui/icons'
import {Link, useNavigate} from "react-router-dom";


export default function Navbar2() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    
    <Grid.Container gap={4}>
    <Grid xs={24}><Card width="100%" height="">
      
      <div className="flex flex-row justify-between align-middle space-x-2">
        <div className="">
          <Link href="">
            <img className="h-8 object-contain" src='/assets/logos/TapLogo.png' />
          </Link>
        </div>
        <div>
        <div className=" flex flex-row align-middle justify-center">
          <div onClick={()=> navigate(`${value}`)}>
          {/* <Tabs initialValue="" hideDivider hideBorder leftSpace={0}>
            <Tabs.Item label="EXPLORE" value="explore">
            </Tabs.Item>
            <Tabs.Item label="TEAM" value="Team">
            </Tabs.Item>
          </Tabs> */}

          </div>
          <div className='m-2 cursor-pointer' auto onClick={() => setState(true)} scale={1/2}>
            {/* Menu Icon */}
            <Menu/>
          </div>
        
        </div>

      </div>

        {/* Drawer Start */}
          <Drawer visible={state} onClose={() => setState(false)} placement="right">
            <Drawer.Title>Heading</Drawer.Title>
            <Drawer.Subtitle>Nothing much bro!</Drawer.Subtitle>
            <Drawer.Content>
              <p>TAP your Potential</p>
            </Drawer.Content>
          </Drawer>
        {/* Drawer End */}
      </div>
    
    </Card>
    </Grid>
    </Grid.Container>
    
    </>
  )
}