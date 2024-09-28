export default {
	myVar1: [],
	myVar2: {},
   open_module (butt){
   if(butt==='N'){
												showModal('service_ins_modal')
												serviceType_ins.setDisabled(false)
												service_startDate_ins.setDisabled(false)
												service_endDate_ins.setDisabled(false)
												service_activeFlag_ins.setDisabled(false)
			                  serviceType_ins.setSelectedOption('')
												service_startDate_ins.setValue('')
			                  service_endDate_ins.setValue('')
		                    service_activeFlag_ins.setValue(true)
												serviceId_ins.setDisabled(0)
			                  Button40.setDisabled(false)
			                  Button41.setDisabled(false)
            	}
else if(butt==='V'){
												showModal('service_ins_modal')
				                serviceType_ins.setSelectedOption(service_tbl.selectedRow.Servicetype)
				                service_startDate_ins.setValue(service_tbl.selectedRow.StartDate)
				 								service_endDate_ins.setValue(service_tbl.selectedRow.EndDate)
				 								service_activeFlag_ins.setValue(service_tbl.selectedRow.ActiveFlag)
	                      serviceId_ins.setDisabled(service_tbl.selectedRow.serviceId)
				 								serviceType_ins.setDisabled(true)
				                service_startDate_ins.setDisabled(true)
				                service_endDate_ins.setDisabled(true)
												service_activeFlag_ins.setDisabled(true)		
				 								serviceId_ins.setDisabled(true)
			                  Button40.setDisabled(true)
			                  Button41.setDisabled(true)
				 
			                  }
else if(butt==='E'){
		                  	showModal('service_ins_modal')
												serviceType_ins.setDisabled(false)
		                    service_startDate_ins.setDisabled(false)
												service_endDate_ins.setDisabled(false)
												service_activeFlag_ins.setDisabled(false)
		       							serviceType_ins.setSelectedOption(service_tbl.selectedRow.Servicetype)
				                service_startDate_ins.setValue(service_tbl.selectedRow.StartDate)
				 								service_endDate_ins.setValue(service_tbl.selectedRow.EndDate)
				 								service_activeFlag_ins.setValue(service_tbl.selectedRow.ActiveFlag)
		                    serviceId_ins.setDisabled(service_tbl.selectedRow.ServiceId)
	}
	
}
}
	

		                    