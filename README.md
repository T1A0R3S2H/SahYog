# SahYog

## Overview

**SahaYog** is a Next.js platform that allows individual users to receive financial support directly from their community. With RazorPay integration, SahYog makes it easy for supporters to donate and for creators to manage their donations.

## Features

- **Personal User Profiles**: Customizable pages for users to showcase their projects and receive support.
- **GitHub OAuth Authentication**: Secure authentication via GitHub to manage user access.
- **Effortless Transactions**: Razorpay integration allows seamless payments on the SahYog website.
- **Donation Leaderboard**: Based on the amount which the supporters pay, they are ranked in the profile of individual creators.

## Tech Stack

- **Framework**: Next.js
- **Authentication**: NextAuth.js with GitHub OAuth
- **Payment Processing**: Razorpay
- **Styling**: Tailwind CSS
- **Database**: MongoDB (or any other database of your choice)
- **Deployment**: Vercel (or any other platform of your choice)

## Installation

To set up SahaYog, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/T1A0R3S2H/SahaYog.git
    cd Sahayog
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env.local` file in the root directory and add your environment variables. For example:
    ```env
    NEXTAUTH_URL=http://localhost:3000
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret
    ```

4. **Run the Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

Once the development server is running, you can start using SahYog:

1. **Sign Up via GitHub**:
    - Click the "Login" or "Start Now" button to authenticate using your GitHub account. ✍️

2. **Customize Your Profile**:
    - After logging in, access the dashboard to personalize your profile page with name, username, email, profile picture, cover picture, and do not forget to provide your Razorpay ID and SECRET to receive payments. 🖌️

3. **Manage Donations**:
    - Use the profile page to track donations and engage with your supporters. 📈

## Functionality Overview

### Landing Page
![Landing Page](https://github.com/T1A0R3S2H/SahYog/assets/123285559/746fcd99-5050-4d63-bb0b-feddd8e82e55)

### Authentication
![Logged In](https://github.com/T1A0R3S2H/SahYog/assets/123285559/2ba02e6f-2857-457e-b195-552821d12f66)

### Profile Page
![saha-1](https://github.com/T1A0R3S2H/SahYog/assets/123285559/357c2fd5-0566-461c-bb92-650ae27ac22b)

### Dashboard
![saha-3](https://github.com/T1A0R3S2H/SahYog/assets/123285559/50a2d595-c680-4d83-8460-a4d40bf9a9b1)

## Contributing

I welcome contributions from the community! To contribute to SahYog, please follow these steps:

1. **Fork the Repository**:
    Click the "Fork" button at the top of the repository page to create your own copy of the repo. 🍴

2. **Clone Your Fork**:
    ```bash
    git clone https://github.com/T1A0R3S2H/SahaYog.git
    cd Sahayog
    ```

3. **Create a Branch**:
    ```bash
    git checkout -b feature-name
    ```

4. **Make Your Changes**:
    - Implement your feature or bug fix. 🛠️

5. **Commit and Push**:
    ```bash
    git add .
    git commit -m "Describe your changes"
    git push origin feature-name
    ```

6. **Create a Pull Request**:
    - Open a pull request on the original repository and describe your changes. 🔄

## 

Made with ❤️ using Next.js.
