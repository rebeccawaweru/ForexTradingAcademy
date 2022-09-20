import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
Home,
Signup,
Promotion1,
Courses,
Login,
Dashboard,
PhysicalClasses,
StudentPortal,
CourseContent,
StudentCourseContent,
StudentCourse,
Enroll,
Direct,
Chat,
VIPForum,
Admin,
AdminChat,
Profile,
Upload,
Landing,
AdminPortal,
Members,
Payments,
Direct2,
Chats,
VipChats,
Adminn,
Chatty2,
AdminContent,
Terms,
Refund,
Privacy,
AdminAccess,
ConfirmPassword,
ForgotPassword,
Reports,
AdminConfirm,
Confirm,
BinaryBots,
ForexBots,
ExpertAdvisor,
TradingStrategies,
Referral,
Response,
UserMessage,
Uploads,
Data,
AddMedia,
AdminBots,
FreeClasses,
FreeClass,
Subscriptions,
AddUser,
SendEmail,
Unsubscribe,
Forex,
TradePlatform,
Trading
} from './pages'
function App() {
  return (
    <>
    <Helmet>
    
        <title>Forex Trading</title>

    <meta
     data-react-helmet="true"
      name="keywords"
      content="MT4,MT5,Binary Bots,Forex Robots,Algorithmic trading,High Quality FX Robots"
      />
    <meta
     data-react-helmet="true"
        name="description"
        content="FX Brokers for Forex Trading"
    />
    <meta
     data-react-helmet="true"
        name="keywords"
        content="Expert Advisors,Crypto Currency,Robo Trading"
    />
</Helmet>
  <BrowserRouter>
  <Routes>
  <Route path='/'>
  <Route index element={<Landing/>} />
  <Route path="signup" element={<Signup />} />
  <Route path="signup/:id" element={<Signup />} />
  <Route path="login" element={<Login/>}/>
  <Route path="promo" element={<Promotion1 />} />
  <Route path="courses:id" element={<Courses/>}/>
  <Route path="dashboard/:id" element={<Dashboard/>}/>
  <Route path= "portal/:id" element={<StudentPortal/>}/>
  <Route path="physicalclasses" element={<PhysicalClasses/>}/>
  <Route path="coursecontent/:id" element={<CourseContent/>}/>
  <Route path="studentcontent" element={<StudentCourseContent/>}/>
  <Route path="enroll/:id" element={<Enroll/>}/>
  <Route path="direct" element={<Direct/>}/>
  <Route path='vip' element={<VIPForum/>}/>
  <Route path="chat" element={<Chat/>}/>
  <Route path='admin' element={<Admin/>}/>
  <Route path ='adminchat/:id' element={<Chatty2/>}/>
  <Route path='profile/:id' element={<Profile/>}/>
  <Route path ='upload' element={<Upload/>}/>
  <Route path='landing' element={<Landing/>}/>
  <Route path="adminportal/:id" element={<AdminPortal/>}/>
  <Route path="members" element={<Members/>}/>
  <Route path="payments" element={<Payments/>}/>
  <Route path="direct2" element={<Direct2/>}/>
  <Route path="chats" element={<Chats/>}/>
  <Route path="vipchats" element={<VipChats/>}/>
  <Route path="adminchat" element={<Adminn/>}/>
  <Route path="admincontent" element={<AdminContent/>}/>

  <Route path='terms' element={<Terms/>}/>
  <Route path="refund" element={<Refund/>}/>
  <Route path="privacy" element={<Privacy/>}/>
  <Route path="access" element={<AdminAccess/>}/>
  <Route path="forgot" element={<ForgotPassword/>}/>
  <Route path="confirm/:token" element={<ConfirmPassword/>}/>
  <Route path="confirm2/:token" element={<AdminConfirm/>}/>
  <Route path="reports" element={<Reports/>}/>
  <Route path="bots" element={<BinaryBots/>}/>
  <Route path="forexbots" element={<ForexBots/>}/>
  <Route path="expert" element={<ExpertAdvisor/>}/>
  <Route path="strategy" element={<TradingStrategies/>}/>
  <Route path="referral" element={<Referral/>}/>
  <Route path="cbk" element={<Response/>}/>
  <Route path="usermessage" element={<UserMessage/>}/>
  <Route path="uploads" element={<Uploads/>}/>
  <Route path="data" element={<Data/>}/>
  <Route path="addmedia" element={<AddMedia/>}/>

  <Route path="studentcourse/:course" element={<StudentCourse/>}/>
  <Route path="adminbots" element={<AdminBots/>}/>
  <Route path="freeclasses" element={<FreeClasses/>}/>
  <Route path="adminfreeclass" element={<FreeClass/>}/>
  <Route path="subscriptions" element={<Subscriptions/>}/>
  <Route path="newuser" element={<AddUser/>}/>
  <Route path="sendmails" element={<SendEmail/>}/>
  <Route path ="unsubscribe" element={<Unsubscribe/>}/>
  <Route path="forex" element={<Forex/>}/>
   <Route path="tradingplatform" element={<TradePlatform/>}/>
   <Route path="trading" element={<Trading/>}/>
  </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
