var provinces = $('#provinceList');
var counties = $('#countlyList');
provinces.change(function(){
	var selectedProv = $(this).val();
	var visibleList = $('#countyList optgroup:visible').index();
	if(selectedProv!=visibleList){
		$('#countyList optgroup:visible').hide();
		$('#countyList optgroup:eq('+selectedProv+')').show();
		$('#countyList').val(parseInt(selectedProv)+1+'01')
	}
});

$('#selectAll').change(function(){
	if($(this).is(':checked')){
		$("#districList input[type='checkbox']").prop('checked','checked');
	}else{
		$("#districList input[type='checkbox']").prop('checked',false);
	}
});
