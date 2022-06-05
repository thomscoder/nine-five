#include <iostream>

class Stack {
    int *arr;
    int pos;
    int capacity;
    public:
        Stack(int);
        ~Stack();
        void push(int);
        int pop();
        int size();
        int peek();
};

Stack::Stack(int size) {
    arr = new int[size];
    pos = -1;
    capacity = size;
}

Stack::~Stack() {
    delete []arr;
}

void Stack::push(int value) {
    if(pos > capacity) {
        std::cout << "Stack overflow" << std::endl;
        return;
    }
    arr[++pos] = value;
    return;
} 

int Stack::pop() {
    if(pos < 0) {
        std::cout << "Stack is empty" << std::endl;
        return 0;
    }
    return arr[pos--];
}

int Stack::peek() {
    return arr[pos];
}

int Stack::size() {
    return pos + 1;
}


int main() {
    Stack s(3);
    s.push(1);
    s.push(2);
    s.push(3);
    s.pop();
    s.push(4);
    std::cout << "Stack size is: " << s.size() << std::endl;
}