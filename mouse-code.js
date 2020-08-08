var mouseover_outside_count=0;
var mouseout_outside_count=0;
var mouseover_inside_count=0;
var mouseout_inside_count=0;
var mouseenter_outside_count=0;
var mouseleave_outside_count=0;
var mouseenter_inside_count=0;
var mouseleave_inside_count=0;

mouseover_outside=function() 
{
    mouseover_outside_count=mouseover_outside_count+1;
    jQuery('#outer_overs').html(mouseover_outside_count+" overs ");
};
mouseout_outside=function() 
{
    mouseout_outside_count=mouseout_outside_count+1;
    jQuery('#outer_outs').html(mouseout_outside_count+" outs ");
};
mouseover_inside=function() 
{
    mouseover_inside_count=mouseover_inside_count+1;
    jQuery('#mouse_out_overs').html(mouseover_inside_count+" overs ");
};
mouseout_inside=function() 
{
    mouseout_inside_count=mouseout_inside_count+1;
    jQuery('#mouse_out_outs').html(mouseout_inside_count+" outs ");
};

mouseenter_outside=function() 
{
    mouseenter_outside_count=mouseenter_outside_count+1;
    jQuery('#mouse_outer_enters').html(mouseenter_outside_count+" enters ");
};
mouseleave_outside=function() 
{
    mouseleave_outside_count=mouseleave_outside_count+1;
    jQuery('#mouse_outer_leaves').html(mouseleave_outside_count+" leaves ");
};
mouseenter_inside=function() 
{
    mouseenter_inside_count=mouseenter_inside_count+1;
    jQuery('#mouse_inner_enters').html(mouseenter_inside_count+" enters ");
};
mouseleave_inside=function() 
{
    mouseleave_inside_count=mouseleave_inside_count+1;
    jQuery('#mouse_inner_leaves').html(mouseleave_inside_count+" leaves ");
};



setup = function() {    
    jQuery('#mouse_out_outside').mouseover(mouseover_outside)
    jQuery('#mouse_out_outside').mouseout(mouseout_outside)
    jQuery('#mouse_out_inside').mouseover(mouseover_inside)
    jQuery('#mouse_out_inside').mouseout(mouseout_inside)
    jQuery('#mouse_leave_outside').mouseenter(mouseenter_outside)
    jQuery('#mouse_leave_outside').mouseleave(mouseleave_outside)
    jQuery('#mouse_leave_inner').mouseenter(mouseenter_inside)
    jQuery('#mouse_leave_inner').mouseleave(mouseleave_inside)
}
jQuery(document).ready(setup)