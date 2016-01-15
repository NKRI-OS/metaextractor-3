    	var sinmsg = "";
    	
    	var userDB = {
    		"ady" : "pass1",
    		"kshitij" : "pass2"
    	};
    	
    	function session(username)
    	{
    		$('#welcome').html(username);
    		$('#userDets').show();
    	}
    	
    	function resetModalForms()
    	{
    		$('#userid,#pass,#uname,#desuid,#despass').each(function(){
    			$(this).val('');
    		});
    		$('.warns').hide();
    	}
    	
    	function initialize()
    	{	
    		$('#signUpInModal').modal({
   				 backdrop: 'static',
    			 keyboard: false
			});
			
			resetModalForms();
			
			$('#signUpInModal').modal('show');
			$('.warns').hide();
			$('#userDets').hide();
    	}
    
    	jQuery(function(){
    		initialize();
		});
		
		
    	
    	$('#contentContainer').css("height",$(window).height() - 49);
    	
    	$('#fetchButton').click(function(){
    		$.get("scripts/hworld.py", function(data){
 				 alert(data);
			});
    	});
    	
    	$('#signInButton').click(function(){
    		resetModalForms();
    		$(this).css("background-color","#EEEEEE");
    		$('#signInForm').css("display","block");
    		$('#mfSignIn').css("display","block");
    		
    		$('#signUpForm').css("display","none");
    		$('#signUpButton').css("background-color","transparent");
    		$('#mfSignUp').css("display","none");
    		
    	});
    	
    	$('#signUpButton').click(function(){
    		resetModalForms();
    		$(this).css("background-color","#EEEEEE");
    		$('#signUpForm').css("display","block");
    		$('#mfSignUp').css("display","block");
    		
    		$('#signInForm').css("display","none");
    		$('#signInButton').css("background-color","transparent");
    		$('#mfSignIn').css("display","none");
    		
    	});
    	
    	$('#sinbutton').click(function(){
    		$('.warns').hide();
    		user_id = $('#userid').val();
    		pass = $('#pass').val();
    		
    		if (user_id in userDB)
    		{
    			if (userDB[user_id] == pass)
    			{
    				$('#signUpInModal').modal('hide');
    				session(user_id);
    			}
    			else
    			{
    				$('#passSinAlert').show();
    				$('#passSinAlert').html("Wrong password");
    			}
    		}
    		else
    		{
    			$('#userSinAlert').show();
    			$('#userSinAlert').html("User ID does not exist");
    		}
    	});
    	
    	$('#supbutton').click(function(){
    		$('.warns').hide();
    		user_id = $('#desuid').val();
    		pass = $('#despass').val();
    		
    		if (user_id in userDB)
    		{
    				$('#userDupAlert').show();
    				$('#userDupAlert').html("User ID already exists. Sign In or choose different ID");
    		}
    		else
    		{
    			userDB[user_id] = pass;
    			$('#signUpInModal').modal('hide');
    			session(user_id);
    		}
    	});
    	
    	$('#logOutButton').click(function(){
    		initialize();
    	});