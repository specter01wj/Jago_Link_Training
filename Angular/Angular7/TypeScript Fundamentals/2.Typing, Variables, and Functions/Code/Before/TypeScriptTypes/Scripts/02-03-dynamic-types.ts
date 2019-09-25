// namespace is the preferred keyword over module
namespace demo_02_03 {

    var person; // Adding ": string: would have shown compile type error
    person = 'John Papa';
    person.substring(1, 4);

    person = 1;
    person.substring(1, 4);

    person = {
        name: 'John Papa',
        age: 40
    };
    person.substring(1, 4);
}