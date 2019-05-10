const Observable = require("tns-core-modules/data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onES6BtnTap = () => {
        useES6LanguageFeatures();

        let nativeList = getNativeList();
        console.log(nativeList.getClass());

        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
    };

    return viewModel;
}

function getNativeList(){
    let List = java.util.List.extend("com.js.NativeList", {});
    return new List();
}

function useES6LanguageFeatures(){
    useSpreadOperator();
}

function useSpreadOperator(){
    let obj = {
        a: "a"
    };

    obj = {
        b: "b",
        ...obj
    };
}

exports.createViewModel = createViewModel;
