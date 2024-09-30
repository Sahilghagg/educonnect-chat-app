import React, { useState } from 'react';
import Background from '@/assets/login2.png';
import Victory from '../../assets/victory.svg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Auth = () => {
  const [name, setName] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [moodleid, setMoodleId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {};
  const handleSignup = async () => {};

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[100vh] bg-white border-2 border-white shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-0 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
          <p className="font-semibold text-center text-fuchsia-950 ">
          Where Education Meets Communication.
            </p>
            <div className="flex items-center justify-center py-10">
              <h1 className="text-5xl font-bold md:text-6xl ml-20">EDUCONNECT</h1>
              <img src={Victory} alt="Victory Emoji" className="h-[100px]" />
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-[25vw]">
            <Tabs className="w-3/4">
              <TabsList className="bg-transparent rounded-none w-full">
                <TabsTrigger
                  value="login"
                  className="text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                >
                  LOGIN
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                >
                  SIGN UP
                </TabsTrigger>
              </TabsList>
              <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                <Input
                  placeholder="Moodle Id"
                  type="text"
                  className="rounded-full p-6"
                  value={moodleid}
                  onChange={(e) => setMoodleId(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="rounded-full p-6" onClick={handleLogin}>
                  Login
                </Button>
              </TabsContent>
              <TabsContent className="flex flex-col gap-5 mt-10" value="signup">
                <Input
                  placeholder="Name"
                  type="text"
                  className="rounded-full p-6"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  placeholder="Mobile No."
                  type="text"
                  className="rounded-full p-6"
                  value={mobileno}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
                <Input
                  placeholder="Moodle Id"
                  type="text"
                  className="rounded-full p-6"
                  value={moodleid}
                  onChange={(e) => setMoodleId(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="rounded-full p-6" onClick={handleSignup}>
                  Sign Up
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <img src={Background} alt="background login" className="h-[700px]" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
