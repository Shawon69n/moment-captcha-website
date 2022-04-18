import React from 'react';
import './Blog.css'
const Blogs = () => {
    return (
        <div className='d-flex'>
            
            <div className='blog-style'>
            <h4>Difference between Authentication and Authorization</h4>
            <p><span className='text-primary'>Authentication :</span> আথিন্টিকেশন ইউজারকে ভেরিফাই করে থাকে । পাসওয়ার্ড এবং নানান ভাবে ইউজার থেকে ডাটা নিয়ে  ইউজারকে ভেরিফাই করে তাকে এক্সেস দেয় । আথিন্টিকেশন ইউজার ইন্টারফেসে ইউজার দেখতে পারে এবং সিমিত পরিবর্তন করতে পারে ।  </p>
            
            <p><span className='text-primary'>Authorization :</span> আথরাইজেশন চিহ্নিত করে কি কি কাজ ইউজার করতে পারবে । ইউজার আথিন্টিকেশন এর পরেই আথরাইজেশন কাজ করতে পারে ।  ইউজার আথরাইজেশন দেখতে কিংবা পরিবর্তন করতে পারে না ।  </p>
            </div>



            <div className='blog-style'>
            <h4>Why are you using firebase?  What other options do you have to implement authentication </h4>
            <p> ফায়ারবেস ওয়েব অ্যাপস জন্য সার্ভার-লেস  ব্যাকএন্ড হিসেবে দেখা যেতে পারে। এটি গুগোল দ্বারা প্রদত্ত একটি আথেন্টিকেশন সিস্টেম।  ফায়ারবেস বব্যবহার করা সহজ এবং সিকিউরিটি ভালো হওয়ায় ফায়ারবেস ব্যবহার করে।</p> 
            <p>ফায়ারবেস ছাড়া ও যেসব আথিন্টিকেশন সিস্টেম ব্যবহার করতে পারিঃ   STYTCH, Ory, Supabase, Okta, PingIdentity</p>
               
            </div>


            <div className='blog-style'>
            <h4>What other services does firebase provide other than authentication</h4>
            <p>এটিতে রিয়েলটাইম ডাটাবেস, হোস্টিং, ক্লাউড ফাংশন, অ্যানালিটিক্স, ক্লাউড ফায়ারস্টোর ইত্যাদির মতো অনেক বৈশিষ্ট্য রয়েছে। </p>
            <p>রিয়েলটাইম ডাটাবেসঃ ওয়েব সাইট অফলাইন গেলেও ডাটা গুলো স্টোর হয়ে থাকে । </p>
            <p>হোস্টিংঃ ফায়ারবেস হোস্টিং একটি ওয়েব অ্যাপের জন্য দ্রুত হোস্টিং প্রদান করে</p>
            <p> অ্যানালিটিক্সঃ আপনার ব্যবহারকারীর ধারণ, ব্যবহারকারীর ব্যস্ততার হার, বা অন্য যেকোনো ধরনের ব্যবহারকারীর আচরণের ডেটা সম্পর্কে মূল্যবান মেট্রিক্স প্রদান করে।</p>
        
            </div>

        </div>
    );
};

export default Blogs;