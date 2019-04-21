var currId = null;
var wv;
var dl = new Vue({
    el: '#draftsList',
    data: {
        drafts: null
    },
    methods: {
        placeTitle: function (event) {
            console.log(event);
            wv = event;
            // nav.title = event.target.innerText.replace(/\s/g, '');
            currId = event.srcElement.nextElementSibling.value;
            var draft = this.drafts.find(draft => draft._id === currId);
            nav.title = draft.title;
            ed.text = draft.markup;
            sm.markdowned = markdown.toHTML(ed.text);
            // CreateUser("something is written there");
        },
        addDraft: function (event) {
            /*dl.$el.children[0].append();
            var clonedNode = document.getElementsByTagName("a")[0].cloneNode(true);
            clonedNode.children[1].value = 0;
            clonedNode.children[0].innerText = "<Undefined>";
            document.getElementsByTagName("ol")[0].appendChild(clonedNode);*/
            changeDraft("<Undefined>", "# there is some default text");
            location.href = "/";
        }
    }
});

axios.get('/drafts').then(response => {dl.drafts = response.data;});

/*function CreateUser(text) {
    $.ajax({
        url: "/markdown",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify({
            text: text
        }),
        success: function (res) {
            console.log(res);
        }
    })
}*/

function changeDraft(title, markup, id=null) {
    $.ajax({
        url: "/",
        contentType: "application/json",
        method: "PUT",
        data: JSON.stringify({
            title: title,
            markup: markup,
            id: id
        }),
        success: function (res) {
            location.href = "/";
        }
    })
}

function deleteDraft(id) {
    $.ajax({
        url: "/",
        contentType: "application/json",
        method: "DELETE",
        data: JSON.stringify({
            id: id
        }),
        success: function (res) {
            location.href = "/";
        }
    })
}

var nav = new Vue({
    el: '#navigation',
    data: {
        title: ""
    },
    methods: {
        saveDraft: function () {
            console.log(nav.title, ed.text, currId);
            changeDraft(nav.title, ed.text, currId);
        },
        delDraft: function (event) {
            console.log(currId);
            deleteDraft(currId);
        }
    }
});

var ed = new Vue({
    el: '#enterDraft',
    data: {
        text: ""
    },
    methods: {
        smChanged: function () {
            sm.markdowned = markdown.toHTML(ed.text);
        }
    }
});

var sm = new Vue({
    el: '#showMarkdown',
    data: {
        markdowned: markdown.toHTML(ed.text)
    }
});