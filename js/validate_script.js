/*валидация формы*/
function validate(form, options){
    var setings = {
        errorFunction:null,
        submitFunction:null,
        highlightFunction:null,
        unhighlightFunction:null
    }
    $.extend(setings, options);

    var $form = form;

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function(e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass : 'errorText',
            focusCleanup : true,
            focusInvalid : false,
            invalidHandler: function(event, validator) {
                if(typeof(setings.errorFunction) === 'function'){
                    setings.errorFunction(form);
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('.form_input'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.input').addClass('error').removeClass('valid');
                if( typeof(setings.highlightFunction) === 'function' ) {
                    setings.highlightFunction(form);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
                if($(element).closest('.input').is('.error')){
                    $(element).closest('.input').removeClass('error').addClass('valid');
                }
                if( typeof(setings.unhighlightFunction) === 'function' ) {
                    setings.unhighlightFunction(form);
                }
            },
            submitHandler: function(form) {
                if( typeof(setings.submitFunction) === 'function' ) {
                    setings.submitFunction(form);
                } else {
                    $form[0].submit();
                }
            }
        });
    }
}

/*Отправка формы с вызовом попапа*/
function validationCall(form){

    var thisForm = $(form);
    var formSur = thisForm.serialize();

    $.ajax({
        url : thisForm.attr('action'),
        data: formSur,
        method:'POST',
        success : function(data){
            
            thisForm.trigger("reset");
            $.fancybox.close();
            popNext("#call_success");            

        }
    });
}

function popNext(popupId){

    $.fancybox.open({
        src  : popupId,
        type : 'inline',
        opts : {
            afterClose: function(){
                $('form').trigger("reset");
            }
        }
    });

}

/*маска на инпуте*/
function Maskedinput(){
    if($('input[type=tel]')){
        $('input[type=tel]').mask('+7 ( 999 ) 999 - 99 - 99');
    }
}



$(document).ready(function(){

    $('form').each( function(){

        validate( $(this) , {submitFunction:validationCall}); 

    })
    
    Maskedinput();

});