* RGL Challenge

* Background
Your have a deal hosting platform that connects eligible investors to offerings hosted on your platform. You need a way to allow visitors to quickly see if they are eligible. Build a basic app where can test whether a they are eligible to invest in your offerings.

* Requirements
1. A form that accepts and validates user input (all fields required for user to proceed)
    - Input or dropdown: Country of citizenship
    - Radio or Toggle: Are you an accredited investor? y/n
    - Radio or Toggle: Can you provide proof of identity? y/n
2. After user submits, they should see one of the following
    - An indication that they are eligible to invest
        - If their country of citizenship is US or supported and they answered yes to all radio/toggles: ‘Eligible’
    - An indication that they are not eligible to invest with message
        - If their country isn’t US or supported: ‘Ineligible: We don’t currently support investors in {{country}}’
        - If they answered no to if they are accredited: ‘Ineligible: We are only able to accept accredited investors at this time’
        - If they answered no to if they can provide proof of identity: ‘Ineligible: We must be able to verify your identity’
3. SPA using React
4. TDD using Jest/Enzyme
5. Consider scalability

* How to start the app
- `npm install`
- Build: `npm run dev`
- Server: `php artisan serve` access on 127.0.0.1:8000
- Tests: `npm run test`
- React components are in `resources/assets/js`
- Initial test is in `resources/assets/js/components/__tests__`
