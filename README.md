# E-Commerce Website

A modern, responsive e-commerce website built with HTML, CSS, and JavaScript. Features include user authentication, product filtering, shopping cart functionality, and a contact system.

## Features

- 🔐 **User Authentication**
  - Email/Password login and registration
  - Firebase integration
  - Secure user sessions

- 🛍️ **Shopping Experience**
  - Product grid with filtering
  - Category-based navigation
  - Responsive product cards
  - Shopping cart functionality

- 💳 **Checkout System**
  - Secure checkout process
  - Form validation
  - Order summary
  - Payment integration

- 📱 **Responsive Design**
  - Mobile-first approach
  - Cross-browser compatibility
  - Adaptive layouts
  - Touch-friendly interface

- 📞 **Contact System**
  - Contact form with validation
  - Business hours display
  - Location information
  - Social media integration

## Tech Stack

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (ES6+)
- Firebase (Authentication)
- Font Awesome (Icons)

## Project Structure

```
ecommerce/
├── index.html              # Main page
├── contact.html            # Contact page
├── styles/
│   └── main.css           # Main stylesheet
├── scripts/
│   ├── app.js             # Main application logic
│   ├── auth.js            # Authentication handling
│   └── checkout.js        # Checkout functionality
└── assets/
    └── images/            # Product images
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd ecommerce
   ```

2. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Email/Password authentication
   - Replace Firebase configuration in `scripts/auth.js`:
     ```javascript
     const firebaseConfig = {
         apiKey: "YOUR_API_KEY",
         authDomain: "your-app.firebaseapp.com",
         projectId: "your-project-id"
     };
     ```

3. **Product Images**
   - Use the provided `download-images.html` to download sample product images
   - Place images in the `assets/images` directory
   - Or add your own product images following the naming convention

4. **Local Development**
   - Open `index.html` in your browser
   - For development, use a local server (e.g., Live Server in VS Code)

## Features in Detail

### Authentication
- Secure user registration and login
- Session management
- Protected checkout process

### Product Management
- Dynamic product grid
- Category filtering
- Product search (coming soon)
- Product details view

### Shopping Cart
- Add/remove items
- Quantity adjustment
- Price calculation
- Cart persistence

### Checkout Process
- Address validation
- Payment processing
- Order confirmation
- Email notifications (coming soon)

### Contact System
- Form validation
- Business information
- Social media links
- Location details

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Product search functionality
- [ ] User reviews and ratings
- [ ] Wishlist feature
- [ ] Order tracking
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Multiple payment gateways
- [ ] Product variants (size, color, etc.)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Font Awesome for icons
- Firebase for authentication
- Lorem Picsum for sample images
- All contributors and supporters

## Contact

For support or queries, please use the contact form on the website or reach out to:
- Email: herkodandy@gmail.com