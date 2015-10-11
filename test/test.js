(function() {
	'use strict';
	
	describe('Test script.js', function() {
		describe('Test InitGrid', function() {
			it('living cells should be equal to the density', function() {
				initGrid();
				var sum = 0;
				for(var i = 0; i < num_row*num_col; i++){
					if(array[i] === 1)
						sum++;
				}
				assert.equal(sum, density);
			});
			
			it('auxArray and wallArray should be init to 0', function() {
				initGrid();
				for(var i = 0; i < num_row*num_col; i++){
					assert.equal(auxArray[i], 0);
					assert.equal(wallArray[i], 0);
				}
			});
		});
		
		describe('Test update', function() {
			it('the update for the corner should be right', function() {
				//[0][0]
				array[0] = 0;
				array[1] = 0; 
				array[2] = 0;
				array[num_col] = 0;
				array[2*num_col] = 0;
				update();
				assert.equal(auxArray[0], 0);
				assert.equal(array[0], 0);
				
				array[0] = 1;
				array[1] = 0; 
				array[2] = 0;
				array[num_col] = 0;
				array[2*num_col] = 0;
				update();
				assert.equal(auxArray[0], 0);
				assert.equal(array[0], 0);
				
				array[0] = 0;
				array[1] = 1; 
				array[2] = 0;
				array[num_col] = 0;
				array[2*num_col] = 0;
				update();
				assert.equal(auxArray[0], 1);
				assert.equal(array[0], 0);
				
				array[0] = 1;
				array[1] = 1; 
				array[2] = 0;
				array[num_col] = 0;
				array[2*num_col] = 0;
				update();
				assert.equal(auxArray[0], 1);
				assert.equal(array[0], 0);
				
				array[0] = 0;
				array[1] = 1; 
				array[2] = 1;
				array[num_col] = 0;
				array[2*num_col] = 0;
				update();
				assert.equal(auxArray[0], 2);
				assert.equal(array[0], 0);
				
				array[0] = 1;
				array[1] = 1; 
				array[2] = 1;
				array[num_col] = 0;
				array[2*num_col] = 0;
				update();
				assert.equal(auxArray[0], 2);
				assert.equal(array[0], 1);
				
				array[0] = 0;
				array[1] = 1; 
				array[2] = 1;
				array[num_col] = 1;
				array[2*num_col] = 0;
				update();
				assert.equal(auxArray[0], 3);
				assert.equal(array[0], 1);
				
				array[0] = 1;
				array[1] = 1; 
				array[2] = 1;
				array[num_col] = 1;
				array[2*num_col] = 0;
				update();
				assert.equal(auxArray[0], 3);
				assert.equal(array[0], 1);
				
				array[0] = 0;
				array[1] = 1; 
				array[2] = 1;
				array[num_col] = 1;
				array[2*num_col] = 1;
				update();
				assert.equal(auxArray[0], 4);
				assert.equal(array[0], 0);
				
				array[0] = 1;
				array[1] = 1; 
				array[2] = 1;
				array[num_col] = 1;
				array[2*num_col] = 1;
				update();
				assert.equal(auxArray[0], 4);
				assert.equal(array[0], 0);
				
			});
			
			it('the update for the middle cell should be right', function() {
				//[5][5] equal to [255]
				array[3*num_col + 5] = 0;
				array[4*num_col + 5] = 0; 
				array[5*num_col + 3] = 0;
				array[5*num_col + 4] = 0;
				array[5*num_col + 6] = 0;
				array[5*num_col + 7] = 0;
				array[6*num_col + 5] = 0;
				array[7*num_col + 5] = 0;
				update();
				assert.equal(auxArray[5*num_col + 5], 0);
				
				array[3*num_col + 5] = 1;
				array[4*num_col + 5] = 0; 
				array[5*num_col + 3] = 0;
				array[5*num_col + 4] = 0;
				array[5*num_col + 6] = 0;
				array[5*num_col + 7] = 0;
				array[6*num_col + 5] = 0;
				array[7*num_col + 5] = 0;
				update();
				assert.equal(auxArray[5*num_col + 5], 1);
				
				array[3*num_col + 5] = 1;
				array[4*num_col + 5] = 1; 
				array[5*num_col + 3] = 0;
				array[5*num_col + 4] = 0;
				array[5*num_col + 6] = 0;
				array[5*num_col + 7] = 0;
				array[6*num_col + 5] = 0;
				array[7*num_col + 5] = 0;
				update();
				assert.equal(auxArray[5*num_col + 5], 2);
				
				array[3*num_col + 5] = 1;
				array[4*num_col + 5] = 1; 
				array[5*num_col + 3] = 1;
				array[5*num_col + 4] = 0;
				array[5*num_col + 6] = 0;
				array[5*num_col + 7] = 0;
				array[6*num_col + 5] = 0;
				array[7*num_col + 5] = 0;
				update();
				assert.equal(auxArray[5*num_col + 5], 3);
				
				array[3*num_col + 5] = 1;
				array[4*num_col + 5] = 1; 
				array[5*num_col + 3] = 1;
				array[5*num_col + 4] = 1;
				array[5*num_col + 6] = 0;
				array[5*num_col + 7] = 0;
				array[6*num_col + 5] = 0;
				array[7*num_col + 5] = 0;
				update();
				assert.equal(auxArray[5*num_col + 5], 4);
				
				array[3*num_col + 5] = 1;
				array[4*num_col + 5] = 1; 
				array[5*num_col + 3] = 1;
				array[5*num_col + 4] = 1;
				array[5*num_col + 6] = 1;
				array[5*num_col + 7] = 0;
				array[6*num_col + 5] = 0;
				array[7*num_col + 5] = 0;
				update();
				assert.equal(auxArray[5*num_col + 5], 5);
				
				array[3*num_col + 5] = 1;
				array[4*num_col + 5] = 1; 
				array[5*num_col + 3] = 1;
				array[5*num_col + 4] = 1;
				array[5*num_col + 6] = 1;
				array[5*num_col + 7] = 1;
				array[6*num_col + 5] = 0;
				array[7*num_col + 5] = 0;
				update();
				assert.equal(auxArray[5*num_col + 5], 6);
				
				array[3*num_col + 5] = 1;
				array[4*num_col + 5] = 1; 
				array[5*num_col + 3] = 1;
				array[5*num_col + 4] = 1;
				array[5*num_col + 6] = 1;
				array[5*num_col + 7] = 1;
				array[6*num_col + 5] = 1;
				array[7*num_col + 5] = 0;
				update();
				assert.equal(auxArray[5*num_col + 5], 7);
				
				array[3*num_col + 5] = 1;
				array[4*num_col + 5] = 1; 
				array[5*num_col + 3] = 1;
				array[5*num_col + 4] = 1;
				array[5*num_col + 6] = 1;
				array[5*num_col + 7] = 1;
				array[6*num_col + 5] = 1;
				array[7*num_col + 5] = 1;
				update();
				assert.equal(auxArray[5*num_col + 5], 8);
				
			})
		});
		
		describe('Test reinitGrid', function() {
			it('living cells should be equal to the density', function() {
				reinitGrid();
				var sum = 0;
				for(var i = 0; i < num_row*num_col; i++){
					if(array[i] === 1)
						sum++;
				}
				assert.equal(sum, density);				
			});
			
			it('auxArray should be init to 0', function() {
				reinitGrid();
				for(var i = 0; i < num_row*num_col; i++){
					assert.equal(auxArray[i], 0);
				}				
			});
			
		});
		
	});
})();