function onBeforeRender(sender) {
    var dashboardControl = sender;

    if (dashboardControl) {
        dashboardControl.on('dashboardEndUpdate', function () { setParameterValues(dashboardControl); })
    }
}

function setParameterValues(control) {
    var parameterDialogExt = control.findExtension('dashboardParameterDialog');

    $("#setParameterValuesButton").dxButton({
        text: 'Specify Parameter Values',
        onClick: function () {
            var parameters = parameterDialogExt.getParameters();
            var paramCategory = parameters.getParameterByName("categoryParameter"),
                paramStartDate = parameters.getParameterByName("startDateParameter");
            paramCategory.setValue("Condiments");
            paramStartDate.setValue(new Date(2015, 3, 1));
        }
    });
    $("#resetParameterValuesButton").dxButton({
        text: 'Reset Parameter Values',
        onClick: function () {
            var parameters = parameterDialogExt.getParameters();
            var paramCategory = parameters.getParameterByName("categoryParameter"),
                paramStartDate = parameters.getParameterByName("startDateParameter");
            paramCategory.setValue(paramCategory.getDefaultValue());
            paramStartDate.setValue(paramStartDate.getDefaultValue());
        }
    });
    $("#showParametersDialog").dxButton({
        text: 'Show Parameters Dialog',
        onClick: function () {
            parameterDialogExt.show();
        }
    });
}