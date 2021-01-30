import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () =>{
    return (
        <>
            <div className="container-footer navbar-light bg-light">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid ">
    <div class="collapse  navbar-collapse" id="navbarNav">
      <ul class="navbar-nav py-5">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Product<ArrowForwardIosIcon style={{height:"15px"}} />
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        </a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="#">Help & Support<ArrowForwardIosIcon style={{height:"15px"}} />
          <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Resources<ArrowForwardIosIcon style={{height:"15px"}}/>          <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        </a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Company<ArrowForwardIosIcon style={{height:"15px"}} />
          <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        <li>Subscription Management</li>
        </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="container">
<nav class="navbar navbar-expand-sm navbar-light bg-light">
  <a class="navbar-brand " href="#">ReactJS</a>
  
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="#"><FacebookIcon /></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><TwitterIcon /></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><YouTubeIcon /></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><LinkedInIcon /></a>
    </li>
  </ul>
</nav>
</div>
<p className="text-center">Company @ Task 2021 | All Rights Reseved </p>
            </div>
        </>
    );
};

export default Footer;