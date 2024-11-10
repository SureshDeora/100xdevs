// Pick
// pick allows you to create a new type by selecting a set of properties(Keys) from an existing Type/Interface.
// imagine you hava a User model with several properties, but for a user profile display,
//  you only need a subset of these properties.

interface User {
   id : string;
   name: string;
   age: number;
   email?: string;
   password: string;

};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
function updateUser(updatedProps: UpdateProps) {
    // hit the database to update the user
}