    $(function() {
        $('#cons').change(function(){
            $('.masque').hide();
            $('#' + $(this).val()).show();
        });
    });