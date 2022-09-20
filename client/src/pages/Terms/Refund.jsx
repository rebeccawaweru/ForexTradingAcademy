import React from 'react';
import {Box,Typography} from '@mui/material';
function Refund() {
    return (
    <Box sx={{width:"100%", height:"100vh",justifyContent:"center", alignItems:"center", pr:3,pl:3}}> 
    <Typography variant="h4" component="h4" sx={{textAlign:"center"}}>Our Refund Policy</Typography>
    <Typography>Thank you for buying our courses. We ensure that our participants have a ultimate experience while they discover, assess, and purchase our courses,whether it is an instructor-led or self-paced training.<br></br>
    As with any online purchase experience, there are terms and conditions that govern the Refund Policy. When you buy a training course on Forex Trading Academy, you agree to our Privacy Policy, Terms of Use and refund policy.
    </Typography>
    <Typography>
    1.Raise refund request within 2 days of purchase of course. Any refund request beyond 5 days of purchasing the course will not be accepted and no refund will be provided. 
    </Typography>
    <Typography>
    2.Forex Trading Academy reserves the right to postpone/cancel an event, or change the location of an event because of insufficient enrolments,instructor illness or unforeseen circumstances.
    </Typography>
    <Typography>
    3.In case Forex Trading Aacademy cancels an event/course, 100% of course fees will be refunded to the delegate,subject the delegate doesn’t subject approval for the postponed date of the event. They will be rescheduled to any upcoming batch without any extra charges.
    </Typography>
    <Typography>
    4.No refunds or credits will be available for participants who fail to attend classes/events.
    </Typography>
    <Typography>
    5.Refund request can be initiated by sending a mail to  with the Subject : Refund Request,citing the reasons for the refund request , with the screenshot of the payment made and mentioning the course applied for.
    </Typography>
    <Typography>
    6.Refund of the duplicate payment made by the delegate will be processed via the same source (original method of payment) in 3 working days post intimation by the customer.
    </Typography>
    <Typography>
    7.Forex Trading Academy reserves the right to revise the terms & conditions of this policy without any prior notice.
    </Typography>
    <Typography>
    Note: All refunds will be processed within 10 working days after the refund request is approved by Forex Trading Academy.
    </Typography>
    </Box>
    );
}

export default Refund;