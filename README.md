# SahYog

## Overview

**SahaYog** is a Next.js platform that allows individual users to receive financial support directly from their community. With RazorPay integration, SahYog makes it easy for supporters to donate and for creators to manage their donations.

## Features ✨

- **Personal User Profiles**: Customizable pages for users to showcase their projects and receive support. 🖼️
- **GitHub OAuth Authentication**: Secure authentication via GitHub to manage user access. 🔒
- **Profile customization**: SahYog allows the creators to customize their profile allowing them to add profile and cover picture.
- **Effortless Transactions**: Razorpay integration allows seamless payments in the SahYog website.
- **Donation Leaderboard**: Based on the amount which the supporters pay, they are ranked in the profile of individual creators.

## Installation 🛠️

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
    NEXT_PUBLIC_UPI_INTEGRATION_KEY=your_upi_integration_key
    DATABASE_URL=your_database_url
    NEXTAUTH_URL=http://localhost:3000
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret
    ```

4. **Run the Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage 🚀

Once the development server is running, you can start using SahYog:

1. **Sign Up via GitHub**:
    - Click the "Login" or "Start Now" button to authenticate using your GitHub account. ✍️

2. **Customize Your Profile**:
    - After logging in, access the dashboard to personalize your profile page with name, username, email, profile picture, cover picture, and do not forget to provide your Razorpay ID and SECRET to receive payments. 🖌️

3. **Share Your Profile**:
    - Share the link of your SahYog profile with your community to start receiving support. 🌐

4. **Manage Donations**:
    - Use the profile page to track donations and engage with your supporters. 📈

## Functionality Overview

### Landing Page
- **Hero Section**: Contains two buttons, "Read More" and "Start Now".
- **Navbar**: Initially, contains a "Login" button.

### Authentication
- **GitHub OAuth**: Users log in via GitHub, and with successful authentication, three buttons appear on the navbar: "Profile", "Dashboard", and "Logout".

### Profile Page
- **User Profile**: Displays user details, payment options, and a leaderboard of supporters.
- **Supporter Interaction**: Supporters can visit the profile page, enter their name, a message, and the amount they wish to pay. Payment is processed via Razorpay.

### Dashboard
- **Customization**: Users can update their name, username, email, cover picture, profile picture, Razorpay ID, and Razorpay secret.

## Contributing 🤝

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