# Login Tests Admin - Success

## Scenario 1: Successful login as an Admin
- Given the user is on the login page
- When they enter a valid email and password
- And click on "Login"
- Then they should be redirected to the home page, indicating that they are logged in
- Proving the user is logged in by assuring the "Logout" bottom appears

## Expectation:
- The user is redirected to the home page, able to make changes and interact within the environment.

## Actual Result:
- By entering credentials registered in the database, it is possible to log in without any issues, and the user can quickly start making changes within the environment.

## Conclusion/Improvements:
- No improvements needed at the moment.

# Login Tests Admin - Error

## Scenario 2: Login with incorrect password as an Admin
- Given the user is on the login page
- When they enter a valid email and an invalid password
- Then they should see an error message "Incorrect password"

## Expectation:
- The user receives a message indicating that their credentials do not exist in the database, and therefore are invalid. They should not have access to features available to a logged-in user, such as the ability to make changes or interact on the home page.

## Actual Result:
- When entering invalid credentials, the system correctly prevents login and displays: "Invalid email or password".
- Check evidences at /evidences/login-error.png

## Conclusion/Improvements:
- Trying to log in with invalid credentials do not allow the user to log in, which shows the test was successful.
- Improvements: It would be less risk coding a 'error' message instead of '.text-red-500'. In case the text changes to other color or any other message, the test will fail. 
- Check screenshot at evidences/login-error-improvements

# New Hero Tests Admin - Success

## Scenario 1: Creating New Hero Successfuly
- Given the user is on the login page and has already logged in successfuly
- Click on "Create New Hero" buttom
- Fill up "Name", "Price" with number, "Fans" with number, "Saves" with number, choose a Power by selecting one in the list
- Click "Submit" buttom
- Assure that the Hero was created by identifying its name on the main page.

## Expectation:
- By filling up all the fields required, the Hero was created successfuly.

## Actual Result:
- By filling up all the fields required, the Hero was created successfuly.

## Conclusion/Improvements:
- No improvements needed at the moment.

# New Hero Tests Admin - Error

## Scenario 2: Creating New Hero without completing all the fields required
- Given the user is on the login page and has already logged in successfuly
- Click on "Create New Hero" buttom

- Fill up the fields required, except for "Name" field. 
- Click "Submit" buttom

- Fill up the fields required, except for "Price" field. 
- Click "Submit" buttom

- Fill up the fields required, but now except for "Fans" field. 
- Click "Submit" buttom

- Fill up the fields required, but now except for "Saves" field. 
- Click "Submit" buttom

- Fill up the fields required, but now except for "Powers" field. 
- Click "Submit" buttom

## Expectation:
- According to the creteria of the app, the admin shoulw not be able to continue creating the hero without filling up all the fields, except for the Image of the Avatar. Some error message should appears when trying to submit with the fields empty.

## Actual Result:
- Completed successfuly since the app shouws a error message, indicating it is necessary to fill up the field, except for the file/image of the Avatar.
- It is not allow to continue without the field Name filled. Message shown: "Name is required";
- It is not allow to continue without the field Price filled. Message shown: "Price is required";
- It is not allow to continue without the field Fans filled. Message shown: "Fans is required";
- It is not allow to continue without the field Saves filled. Message shown: "Saves is required";
- It is not allow to continue without the field Powers filled. Message shown: "Powers is required";
- It allows to continue with no Avatar image selected.

## Conclusion/Improvements:
- No improvements needed at the moment.

# Edit Hero Tests Admin

## Scenario 1: Check if it is possible to edit the Name of the Hero created
- Given the user is on the login page and has already logged in successfuly
- Click on the pencil to Edit the Hero created
- Click on the "Name" field
- Type another name
- Click on "Submit" buttom
- Check if name was correctly updated

## Scenario 2: Check if it is possible to edit the Price of the Hero created
- Given the user is on the login page and has already logged in successfuly
- Click on the pencil to Edit the Hero created
- Click on the "Price" field
- Type another price
- Click on "Submit" buttom
- Check if price was correctly updated

## Expectation:
- The Admin must be able to Edit the Hero created successfuly.

## Actual Result:
- As an Admin logged in, the app allows the user to edit all the details on the Hero created successfuly.

## Conclusion/Improvements:
- No improvements needed at the moment.

# Delete Hero Tests Admin

## Scenario 1: 
- Given the user is on the login page and has already logged in successfuly as an Admin
- Select one of the recent created Heroes to delete
- Click on the "trash bottom" and confirm "Yes"

## Expectation:
- The Admin must be able to Delete any and all Heroes, including the one just created.

## Actual Result:
- The Admin can successfuly delete the Heroes.

## Conclusion/Improvements:
- No improvements needed at the moment.